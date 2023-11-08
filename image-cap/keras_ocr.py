import keras_ocr
import requests

# Create a pipeline for text recognition
pipeline = keras_ocr.pipeline.Pipeline()

# Read images from a folder path to image objects
images = [keras_ocr.tools.read(img) for img in ['eye.png']]

# Perform text recognition on the images
prediction_groups = pipeline.recognize(images)

# Define a threshold for grouping words (adjust as needed)
x_threshold = 50  # Adjust this threshold as needed

# Initialize variables to store grouped words
grouped_words = []
current_group = []

# Iterate through the recognized words and boxes
for text, box in prediction_groups[0]:
    if not current_group:
        # If the current group is empty, add the first word to it
        current_group.append((text, box))
    else:
        # Calculate the x-coordinate of the last word in the current group
        last_x = current_group[-1][1][2][0]
        # Calculate the x-coordinate of the current word
        current_x = box[0][0]

        if current_x - last_x <= x_threshold:
            # If the current word is close to the last word on the x-axis, add it to the current group
            current_group.append((text, box))
        else:
            # If the current word is not close on the x-axis, start a new group
            grouped_words.append(current_group)
            current_group = [(text, box)]

# Append the last group of words
grouped_words.append(current_group)

# Print the grouped words
for group in grouped_words:
    grouped_text = ''.join(word[0] for word in group)
    print(grouped_text)
