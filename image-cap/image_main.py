import wikipedia
from blip_extractor import Generate_Image_Caption
from label_extractor import Extract_Labels_OCR
import sys
sys.path.append('../')
from app.mcq_generation import MCQGenerator

print('Running....')
image_path = 'Images_test/eye.png'
blip_context = Generate_Image_Caption(image_path)
print('Context:', blip_context)


# EasyOCR
print('Generating Labels....')
labels = Extract_Labels_OCR(image_path)
print('Labels:', labels)

print('Generating Context from Image Labels....')
context_para = ''

for label in labels:
    try:
        context = wikipedia.summary(label, sentences=2)
        context_para += label + context + " "
    except:
        pass

print(context_para)
