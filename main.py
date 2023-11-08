import textwrap
import torch

from app.mcq_generation import MCQGenerator

def show_result(generated: str, answer: str, context:str, original_question: str = ''):
    
    print('Context:')

    for wrap in textwrap.wrap(context, width=120):
        print(wrap)
    print()

    print('Question:')
    print(generated)

    print('Answer:')
    print(answer)
    print('-----------------------------')


MCQ_Generator = MCQGenerator(True)

contextDig = '''The digestive system is a complex and highly organized system responsible for breaking down food, absorbing nutrients, and eliminating waste products from the body. It encompasses a series of organs and structures that work together to facilitate the digestion and absorption of nutrients. Here are some of the key components of the digestive system:

Mouth: Digestion begins in the mouth, where teeth mechanically break down food into smaller pieces, and saliva, produced by the salivary glands, starts the chemical breakdown of starches through the enzyme amylase.

Pharynx and Esophagus: Once food is chewed and mixed with saliva, it is swallowed and moves through the pharynx and esophagus, which serve as passageways to transport food to the stomach.

Stomach: The stomach is a muscular organ that stores and partially digests food. It secretes gastric juices containing hydrochloric acid and pepsin to break down proteins. This results in a semi-liquid substance known as chyme.

Small Intestine: The small intestine is where the majority of digestion and nutrient absorption occur. It is divided into three parts: the duodenum, jejunum, and ileum. Enzymes from the pancreas and bile from the liver help break down carbohydrates, fats, and proteins, while the villi and microvilli in the intestinal lining absorb nutrients into the bloodstream.

Pancreas: The pancreas is both an endocrine and exocrine gland. It produces digestive enzymes (exocrine function) that are released into the small intestine to further digest food. It also secretes insulin and glucagon (endocrine function), which regulate blood sugar levels.

Liver: The liver has multiple roles in digestion. It produces bile, which is stored in the gallbladder and released into the small intestine to emulsify fats, making them easier to digest. The liver also detoxifies blood and stores glycogen for energy.

Gallbladder: The gallbladder stores bile produced by the liver and releases it into the small intestine in response to the presence of fatty foods. Bile aids in the digestion and absorption of fats.

Large Intestine (Colon): The large intestine absorbs water and electrolytes from undigested food, forming feces. It also houses a diverse population of beneficial bacteria that assist in the breakdown of certain substances and produce vitamins.

Rectum: The rectum stores feces until they are ready to be eliminated from the body.

Anus: The anus is the final part of the digestive system. It has sphincters that control the release of feces during defecation.

Appendix: Although its exact function is not well understood, the appendix is a small, finger-like pouch attached to the large intestine. It may play a role in immune function.

The digestive system's primary function is to extract nutrients and energy from the food we consume while eliminating waste products. This intricate system relies on the coordinated action of various organs and enzymes to ensure that

'''

MCQ_Generator.generate_mcq_questions(contextDig, 5) 
