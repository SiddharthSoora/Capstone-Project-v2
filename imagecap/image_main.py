# from app.mcq_generation import MCQGenerator
import sys
import wikipedia
from blip_extractor import Generate_Image_Caption
from label_extractor import Extract_Labels_OCR


def img_main(image_path):
    print('Running....')
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
            context_para += label + " : " + context + " "+"\n"
        except:
            pass

    print(context_para)
    return context_para
