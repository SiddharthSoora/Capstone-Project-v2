import streamlit as st

from app.mcq_generation import MCQGenerator


st.write("Hello world!")
MQC_Generator = MCQGenerator()
context = st.text_area("Enter the context")
count = st.number_input("Enter the number of questions")
questions = MQC_Generator.generate_mcq_questions(context, count)
for question in questions:
    st.write('-------------------')
    st.write(question.questionText)
    st.write("Right Answer:-"+question.answerText)
    if (len(question.distractors) <= 3):
        st.write(question.distractors)
    else:
        st.write("Not enough distractors")
    st.write('-------------------')
