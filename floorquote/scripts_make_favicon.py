from PIL import Image

src_path = r"c:\Users\DELL\Desktop\our web service\floorquote\public\floorequote logo.png"
im = Image.open(src_path).convert("RGBA")
w, h = im.size
px = im.load()

x0, x1 = 151, 471
y0, y1 = 373, 603

pad = 10
crop_box = (max(x0 - pad, 0), max(y0 - pad, 0), min(x1 + pad, w), min(y1 + pad, h))
icon = im.crop(crop_box)

# Make it a square canvas (transparent background) so the icon isn't stretched
iw, ih = icon.size
side = max(iw, ih)
canvas = Image.new("RGBA", (side, side), (255, 255, 255, 0))
canvas.paste(icon, ((side - iw) // 2, (side - ih) // 2), icon)

out_dir = r"c:\Users\DELL\Desktop\our web service\floorquote\app"
sizes = [16, 32, 48, 64]
canvas.save(out_dir + r"\favicon.ico", sizes=[(s, s) for s in sizes])
canvas.resize((512, 512), Image.LANCZOS).save(
    r"c:\Users\DELL\Desktop\our web service\floorquote\public\floorquote-icon.png"
)
print("saved favicon.ico and floorquote-icon.png, square side:", side)
