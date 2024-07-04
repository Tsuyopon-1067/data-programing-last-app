import sys
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from janome.tokenizer import Tokenizer
import unicodedata
import re
import os

args = sys.argv
text = args[1]
output_path = args[2]

text = re.sub('\u3000', '', text)
text = re.sub('・', '', text)
text = re.sub('「', '', text)
text = re.sub('」', '', text)
text = re.sub('（', '', text)
text = re.sub('）', '', text)
text = re.sub('\n', ' ', text)
text = re.sub('\\n', '', text)
text = re.sub('\\n', ' ', text)

text_sample = unicodedata.normalize('NFKC', text)
print('UNICODEの正規化後：{}'.format(text_sample))

t = Tokenizer()
tokenized_text = t.tokenize(text)

words_list = []
for token in tokenized_text:
    tokenized_word = token.surface
    hinshi = token.part_of_speech.split(',')[0]
    hinshi2 = token.part_of_speech.split(',')[1]
    if hinshi == "名詞":
        if (hinshi2 != "数") and (hinshi2 != "代名詞") and (hinshi2 != "非自立"):
            words_list.append(tokenized_word)

words_wakachi = " ".join(words_list)
print("words_list ",words_list)
print("words_wakachi ",words_wakachi)
current_dir = os.path.dirname(os.path.abspath(__file__))
font = os.path.join(current_dir, './ipaexg.ttf')
# 常用語句
stopWords = ['ので', 'そう', 'から', 'ため']
word_cloud = WordCloud(font_path=font, width=1500, height=900,
                       stopwords=set(stopWords), min_font_size=5,
                       collocations=False, background_color='white',
                       max_words=400).generate(words_wakachi)
figure = plt.figure(figsize=(15, 10))
plt.imshow(word_cloud)
plt.tick_params(labelbottom=False, labelleft=False)
plt.xticks([])
plt.yticks([])
figure.savefig(output_path)
