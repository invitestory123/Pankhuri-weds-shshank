import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def draw_diamond(draw, cx, cy, r, color):
    points = [(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)]
    draw.polygon(points, fill=color)

def create_og_banner():
    W, H = 1200, 630
    
    # 1. Base Canvas - Warm handmade ivory parchment with royal vignette
    base = Image.new("RGBA", (W, H), (250, 246, 237, 255))
    
    # Texture overlay from paper.jpg if available
    paper_path = "src/assets/paper.jpg"
    if os.path.exists(paper_path):
        try:
            paper_img = Image.open(paper_path).convert("RGBA")
            # Tile paper across canvas
            pw, ph = paper_img.size
            for x in range(0, W, pw):
                for y in range(0, H, ph):
                    base.paste(paper_img, (x, y))
        except Exception as e:
            print(f"Paper texture error: {e}")
            
    # Add warm royal radial vignette (rich ivory center, soft antique blush & warm gold edges)
    vignette = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    v_draw = ImageDraw.Draw(vignette)
    
    # Subtle soft warm border tint
    v_draw.rectangle([0, 0, W, H], fill=(247, 240, 226, 80))
    base = Image.alpha_composite(base, vignette)
    
    # 2. Ornate Double Gold Frames
    frame_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    f_draw = ImageDraw.Draw(frame_layer)
    
    gold_border = (201, 168, 76, 230)
    gold_inner = (201, 168, 76, 140)
    maroon_accent = (123, 30, 43, 220)
    
    # Outer frame
    f_draw.rectangle([24, 24, W - 25, H - 25], outline=gold_border, width=2)
    # Inner frame
    f_draw.rectangle([34, 34, W - 35, H - 35], outline=gold_inner, width=1)
    
    # Corner diamonds
    corners = [
        (34, 34), (W - 35, 34),
        (34, H - 35), (W - 35, H - 35)
    ]
    for cx, cy in corners:
        draw_diamond(f_draw, cx, cy, 6, gold_border)
        draw_diamond(f_draw, cx, cy, 3, maroon_accent)

    base = Image.alpha_composite(base, frame_layer)
    
    # 3. Add Floral Corner Accents if available
    floral_path = "src/assets/floral-corner.png"
    if os.path.exists(floral_path):
        try:
            floral = Image.open(floral_path).convert("RGBA")
            fw, fh = 140, 140
            floral_resized = floral.resize((fw, fh), Image.Resampling.LANCZOS)
            
            # Top-left
            base.paste(floral_resized, (36, 36), floral_resized)
            # Top-right
            fl_tr = floral_resized.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
            base.paste(fl_tr, (W - 36 - fw, 36), fl_tr)
            # Bottom-left
            fl_bl = floral_resized.transpose(Image.Transpose.FLIP_TOP_BOTTOM)
            base.paste(fl_bl, (36, H - 36 - fh), fl_bl)
            # Bottom-right
            fl_br = floral_resized.transpose(Image.Transpose.FLIP_LEFT_RIGHT).transpose(Image.Transpose.FLIP_TOP_BOTTOM)
            base.paste(fl_br, (W - 36 - fw, H - 36 - fh), fl_br)
        except Exception as e:
            print(f"Floral corner error: {e}")
            
    # 4. Add Couple Illustration in Arch Frame on Left
    couple_path = "src/assets/couple.png"
    if os.path.exists(couple_path):
        try:
            couple_img = Image.open(couple_path).convert("RGBA")
            # Target height approx 460px
            c_h = 460
            c_w = int(couple_img.width * (c_h / couple_img.height))
            couple_resized = couple_img.resize((c_w, c_h), Image.Resampling.LANCZOS)
            
            # Position couple on left half
            c_x = 90
            c_y = int((H - c_h) / 2) + 10
            
            # Arch backdrop for couple
            arch_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
            a_draw = ImageDraw.Draw(arch_layer)
            arch_box = [c_x - 18, c_y - 18, c_x + c_w + 18, c_y + c_h + 12]
            a_draw.rounded_rectangle(arch_box, radius=40, fill=(255, 255, 255, 140), outline=gold_border, width=2)
            base = Image.alpha_composite(base, arch_layer)
            
            # Drop shadow for couple
            base.paste(couple_resized, (c_x, c_y), couple_resized)
        except Exception as e:
            print(f"Couple illustration error: {e}")
            c_x, c_w = 90, 0
    else:
        c_x, c_w = 90, 0

    # 5. Right Area Typography Setup
    # Available area for text: from cx_start to W - 60
    text_start_x = c_x + c_w + 60
    text_center_x = int((text_start_x + (W - 60)) / 2)
    
    font_dir = "scripts/fonts"
    f_ganesh = ImageFont.truetype(os.path.join(font_dir, "Cinzel-Bold.ttf"), 18)
    f_kicker = ImageFont.truetype(os.path.join(font_dir, "Montserrat-SemiBold.ttf"), 14)
    f_name = ImageFont.truetype(os.path.join(font_dir, "PlayfairDisplay-Bold.ttf"), 54)
    f_amp = ImageFont.truetype(os.path.join(font_dir, "AlexBrush-Regular.ttf"), 68)
    f_date = ImageFont.truetype(os.path.join(font_dir, "Montserrat-Bold.ttf"), 17)
    f_venue = ImageFont.truetype(os.path.join(font_dir, "Montserrat-SemiBold.ttf"), 16)
    f_tagline = ImageFont.truetype(os.path.join(font_dir, "CormorantGaramond-BoldItalic.ttf"), 22)
    f_hash = ImageFont.truetype(os.path.join(font_dir, "Montserrat-SemiBold.ttf"), 14)
    
    text_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    t_draw = ImageDraw.Draw(text_layer)
    
    maroon_text = (123, 30, 43, 255)
    gold_text = (184, 134, 40, 255)
    ink_text = (60, 48, 42, 230)
    
    # A. Invocation: || Shree Ganeshaya Namah ||
    invoc = "||  SHREE  GANESHAYA  NAMAH  ||"
    b_invoc = f_ganesh.getbbox(invoc)
    w_invoc = b_invoc[2] - b_invoc[0]
    t_draw.text((text_center_x - w_invoc / 2, 75), invoc, font=f_ganesh, fill=gold_text)
    
    # Subtle separator line
    t_draw.line([(text_center_x - 120, 108), (text_center_x + 120, 108)], fill=(201, 168, 76, 180), width=1)
    draw_diamond(t_draw, text_center_x, 108, 4, gold_text)
    
    # B. Kicker: YOU ARE CORDIALLY INVITED TO CELEBRATE THE WEDDING OF
    kicker = "YOU ARE CORDIALLY INVITED TO THE WEDDING OF"
    b_kicker = f_kicker.getbbox(kicker)
    w_kicker = b_kicker[2] - b_kicker[0]
    t_draw.text((text_center_x - w_kicker / 2, 122), kicker, font=f_kicker, fill=ink_text)
    
    # C. Couple Names: PANKHURI & SHASHANK
    name1 = "Pankhuri"
    name2 = "Shashank"
    amp = "&"
    
    b1 = f_name.getbbox(name1)
    w1 = b1[2] - b1[0]
    b2 = f_name.getbbox(name2)
    w2 = b2[2] - b2[0]
    ba = f_amp.getbbox(amp)
    wa = ba[2] - ba[0]
    
    spacing = 18
    tot_names = w1 + wa + w2 + (spacing * 2)
    start_nx = text_center_x - (tot_names / 2)
    y_names = 168
    y_amp = 158
    
    # Shadow
    t_draw.text((start_nx + 2, y_names + 2), name1, font=f_name, fill=(0, 0, 0, 45))
    t_draw.text((start_nx + w1 + spacing + 2, y_amp + 2), amp, font=f_amp, fill=(0, 0, 0, 45))
    t_draw.text((start_nx + w1 + wa + (spacing * 2) + 2, y_names + 2), name2, font=f_name, fill=(0, 0, 0, 45))
    
    # Main text
    t_draw.text((start_nx, y_names), name1, font=f_name, fill=maroon_text)
    t_draw.text((start_nx + w1 + spacing, y_amp), amp, font=f_amp, fill=gold_text)
    t_draw.text((start_nx + w1 + wa + (spacing * 2), y_names), name2, font=f_name, fill=maroon_text)
    
    # D. Sacred Subtitle / Tagline
    tagline = "Two Souls  ·  One Beautiful Journey"
    b_tag = f_tagline.getbbox(tagline)
    w_tag = b_tag[2] - b_tag[0]
    t_draw.text((text_center_x - w_tag / 2, 252), tagline, font=f_tagline, fill=ink_text)
    
    # E. Date & Venue Badges
    badge_y = 312
    date_txt = "23RD & 24TH NOVEMBER 2026"
    b_d = f_date.getbbox(date_txt)
    w_d = b_d[2] - b_d[0]
    
    bw_d = w_d + 46
    bh_d = 48
    bx_d = text_center_x - (bw_d / 2)
    
    # Date Pill Badge in Royal Maroon
    t_draw.rounded_rectangle([bx_d, badge_y, bx_d + bw_d, badge_y + bh_d], radius=24, fill=(123, 30, 43, 245), outline=gold_border, width=2)
    t_draw.text((bx_d + 23, badge_y + 14), date_txt, font=f_date, fill=(255, 248, 235, 255))
    
    # Venue Pill Badge
    venue_y = 376
    venue_txt = "RAJ VILAS PALACE · ORCHHA, M.P."
    b_v = f_venue.getbbox(venue_txt)
    w_v = b_v[2] - b_v[0]
    bw_v = w_v + 44
    bh_v = 44
    bx_v = text_center_x - (bw_v / 2)
    
    t_draw.rounded_rectangle([bx_v, venue_y, bx_v + bw_v, venue_y + bh_v], radius=22, fill=(255, 255, 255, 210), outline=gold_border, width=1)
    t_draw.text((bx_v + 22, venue_y + 12), venue_txt, font=f_venue, fill=maroon_text)
    
    # F. Itinerary Highlights Row
    itin_y = 448
    itin_txt = "MEHENDI  ·  SANGEET  ·  HALDI  ·  WEDDING"
    f_itin = ImageFont.truetype(os.path.join(font_dir, "Montserrat-SemiBold.ttf"), 13)
    b_it = f_itin.getbbox(itin_txt)
    w_it = b_it[2] - b_it[0]
    t_draw.text((text_center_x - w_it / 2, itin_y), itin_txt, font=f_itin, fill=gold_text)
    
    # G. Hashtag / Brand Footer
    hash_txt = "#P.S.ILoveYou  ·  invitestory.in"
    b_h = f_hash.getbbox(hash_txt)
    w_h = b_h[2] - b_h[0]
    t_draw.text((text_center_x - w_h / 2, 508), hash_txt, font=f_hash, fill=(110, 95, 85, 200))
    
    # Merge text
    final_img = Image.alpha_composite(base, text_layer)
    
    # 6. Save Lossless Compressed Formats
    os.makedirs("public", exist_ok=True)
    os.makedirs("dist", exist_ok=True)
    
    # A. PNG (Lossless compressed with PIL optimize=True)
    png_path = "public/og-image.png"
    final_img.save(png_path, "PNG", optimize=True)
    print(f"Generated lossless PNG {png_path}: {os.path.getsize(png_path)} bytes")
    
    # B. WebP (Lossless compressed WebP)
    webp_path = "public/og-image.webp"
    final_img.save(webp_path, "WEBP", lossless=True, quality=100, method=6)
    print(f"Generated lossless WebP {webp_path}: {os.path.getsize(webp_path)} bytes")
    
    # C. High Quality JPG fallback
    jpg_path = "public/og-image.jpg"
    final_rgb = final_img.convert("RGB")
    final_rgb.save(jpg_path, "JPEG", quality=95, optimize=True)
    print(f"Generated JPG {jpg_path}: {os.path.getsize(jpg_path)} bytes")
    
    # Copy to dist for instant distribution if dist exists
    if os.path.exists("dist"):
        final_img.save("dist/og-image.png", "PNG", optimize=True)
        final_img.save("dist/og-image.webp", "WEBP", lossless=True, quality=100, method=6)
        final_rgb.save("dist/og-image.jpg", "JPEG", quality=95, optimize=True)
        print("Copied all OG images to dist/")

if __name__ == "__main__":
    create_og_banner()
