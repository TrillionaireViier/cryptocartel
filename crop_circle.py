from PIL import Image, ImageDraw
import sys

def crop_to_circle(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Assuming the coin is roughly in the center
    # Let's find the bounding box of the non-white area
    # Actually, simpler: let's just make a circular mask in the exact center
    width, height = img.size
    
    # We create a mask
    mask = Image.new('L', (width, height), 0)
    draw = ImageDraw.Draw(mask)
    
    # By default, a tight circle.
    # The user's image has a shadow. Let's just create a circle that covers 90% of the image.
    margin = int(width * 0.05)
    draw.ellipse((margin, margin, width - margin, height - margin), fill=255)
    
    result = img.copy()
    result.putalpha(mask)
    result.save(output_path, 'PNG')

crop_to_circle('public/media__front.jpg', 'public/media__front.png')
crop_to_circle('public/media__back.jpg', 'public/media__back.png')
print("Done!")
