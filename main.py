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

context = '''The koala or, inaccurately, koala bear[a] (Phascolarctos cinereus), is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which are members of the family Vombatidae. The koala is found in coastal areas of the mainland's eastern and southern regions, inhabiting Queensland, New South Wales, Victoria, and South Australia. It is easily recognisable by its stout, tailless body and large head with round, fluffy ears and large, spoon-shaped nose. The koala has a body length of 60–85 cm (24–33 in) and weighs 4–15 kg (9–33 lb). Fur colour ranges from silver grey to chocolate brown. Koalas from the northern populations are typically smaller and lighter in colour than their counterparts further south. These populations possibly are separate subspecies, but this is disputed.'''

context_oxygen = '''Oxygen is the chemical element with the symbol O and atomic number 8. It is a member of the chalcogen group in the periodic table, a highly reactive nonmetal, and an oxidizing agent that readily forms oxides with most elements as well as with other compounds. Oxygen is Earth's most abundant element, and after hydrogen and helium, it is the third-most abundant element in the universe. At standard temperature and pressure, two atoms of the element bind to form dioxygen, a colorless and odorless diatomic gas with the formula O
2. Diatomic oxygen gas currently constitutes 20.95% of the Earth's atmosphere, though this has changed considerably over long periods of time. Oxygen makes up almost half of the Earth's crust in the form of oxides.[3]

Dioxygen provides the energy released in combustion[4] and aerobic cellular respiration,[5] and many major classes of organic molecules in living organisms contain oxygen atoms, such as proteins, nucleic acids, carbohydrates, and fats, as do the major constituent inorganic compounds of animal shells, teeth, and bone. Most of the mass of living organisms is oxygen as a component of water, the major constituent of lifeforms. Oxygen is continuously replenished in Earth's atmosphere by photosynthesis, which uses the energy of sunlight to produce oxygen from water and carbon dioxide. Oxygen is too chemically reactive to remain a free element in air without being continuously replenished by the photosynthetic action of living organisms. Another form (allotrope) of oxygen, ozone (O
3), strongly absorbs ultraviolet UVB radiation and the high-altitude ozone layer helps protect the biosphere from ultraviolet radiation. However, ozone present at the surface is a byproduct of smog and thus a pollutant.

Oxygen was isolated by Michael Sendivogius before 1604, but it is commonly believed that the element was discovered independently by Carl Wilhelm Scheele, in Uppsala, in 1773 or earlier, and Joseph Priestley in Wiltshire, in 1774. Priority is often given for Priestley because his work was published first. Priestley, however, called oxygen "dephlogisticated air", and did not recognize it as a chemical element. The name oxygen was coined in 1777 by Antoine Lavoisier, who first recognized oxygen as a chemical element and correctly characterized the role it plays in combustion.

Common uses of oxygen include production of steel, plastics and textiles, brazing, welding and cutting of steels and other metals, rocket propellant, oxygen therapy, and life support systems in aircraft, submarines, spaceflight and diving.'''


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

MCQ_Generator.generate_mcq_questions(contextDig, 10) 
