import requests
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
import time
from concurrent.futures import ThreadPoolExecutor


def Generate_Image_Caption(img_path):
    processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-large")
    model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-large")
    raw_image = Image.open(img_path)
    # Conditional image captioning
    text = ""
    inputs = processor(raw_image, text, return_tensors="pt")
    out = model.generate(**inputs)
    caption = processor.decode(out[0], skip_special_tokens=True)
    return caption


# List of image file paths to process
image_paths = ['eye.png', 'brain.jpeg']

# Create a ThreadPoolExecutor for parallel processing
with ThreadPoolExecutor(max_workers=10) as executor:
    start_time = time.perf_counter()
    captions = list(executor.map(Generate_Image_Caption, image_paths))
    elapsed_time = time.perf_counter() - start_time

# Print the generated captions and elapsed time
for i, caption in enumerate(captions):
    print(f"Image {i + 1} caption:", caption)
print("Elapsed time:", str(round(elapsed_time, 2)) + " seconds")