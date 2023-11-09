import os
import easyocr
from matplotlib import pyplot as plt
import numpy as np
import cv2


#inp : Image path ,return: list of labels 
def Extract_Labels_OCR(image_path):
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_path, paragraph="False")
    out = []
    for item in result:
        out.append(item[1])
    return out
    # top_left = tuple(result[0][0][0])
    # bottom_right = tuple(result[0][0][2])
    # text = result[0][1]
    # font = cv2.FONT_HERSHEY_SIMPLEX
    # img = cv2.imread('eye.png')
    # img = cv2.rectangle(img,top_left,bottom_right,(0,255,0),3)
    # img = cv2.putText(img,text,bottom_right, font, 0.5,(0,255,0),2,cv2.LINE_AA)
    # plt.figure(figsize=(10,10))
    # plt.imshow(img)
    # plt.show()
