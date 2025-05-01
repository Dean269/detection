from transformers import pipeline

# Example paraphraser
paraphraser = pipeline("text2text-generation", model="t5-small")

def paraphrase_text(input_text):
    result = paraphraser(f"paraphrase: {input_text}", max_length=512, do_sample=True)
    return result[0]['generated_text']
## could be a heavier model