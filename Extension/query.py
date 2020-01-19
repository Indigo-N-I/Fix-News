import os
from ignorethis import code
from google.cloud import language_v1
from google.cloud.language_v1 import enums
from googlesearch import search

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = code

def get_data_info(text):
    client = language_v1.LanguageServiceClient()

    # text_content = 'California is a state.'

    # Available types: PLAIN_TEXT, HTML
    type_ = enums.Document.Type.PLAIN_TEXT

    # Optional. If not specified, the language is automatically detected.
    # For list of supported languages:
    # https://cloud.google.com/natural-language/docs/languages
    language = "en"
    document = {"content": text, "type": type_, "language": language}

    # Available values: NONE, UTF8, UTF16, UTF32
    encoding_type = enums.EncodingType.UTF8

    response = client.analyze_entities(document, encoding_type=encoding_type)
    # print([b.name for b in response.entities])
    return [b.name for b in response.entities if b.salience > 0.01]

def get_websites(texy):
    important_list = get_data_info(text)
    query = " ".join(important_list)

    links = []
    for k in search(query, tld = "co.in", num = 10, stop = 5, pause = 2):
        links.append(k)

    return links
