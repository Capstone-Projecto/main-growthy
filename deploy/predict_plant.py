from tensorflow import keras
import numpy as np
from tensorflow.keras.preprocessing import image
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
# %matplotlib inline
import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'True'  # so that it runs on a mac

# model = keras.models.load_model('/media/ihsan/Data/Github/try-deploy-5/model/predict_plant.h5')
model = keras.models.load_model('/model/predict_plant.h5')

# plant_list = {1: 'Aloe_Vera', 
#               2: 'Anthurium_Crystallinum', 
#               3: 'Caladium_Bicolor', 
#               4: 'Dracaena_Trifasciata', 
#               5: 'Echeveria_Minima', 
#               6: 'Euphorbia_Milii',
#               7: 'Helianthus_Annuus',
#               8: 'Mammilaria_Hahniana',
#               9: 'Monstera_Adansonii',
#               10: 'Phalaenopsis_Amabilis',
#               11: 'Rosa_Chinensis',
#               12: 'Sedum_Morganianum',
#               13: 'Tillandsia_Usneoides'
#               }

def predict(fname):

    img = image.load_img(fname, target_size=(150,150))

    imgplot = plt.imshow(img)
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])

    classes = model.predict(images, batch_size=10)  
    # print(fn)
    # print(classes)
    best = 0.0
    i = 1
    best_class = 0
    for value in classes[0]:
        if value > best:
            best = value
            best_class = i
        i = i + 1

    return best_class

if __name__ == '__main__':

    import pprint
    import sys

    file_name = sys.argv[1]
    results = predict(file_name)
    pprint.pprint(results)