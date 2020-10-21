from flask import Flask
from flask_cors import CORS, cross_origin
app = Flask(__name__)
import requests
@app.route('/', methods = ['GET'])
@cross_origin()
def index():
    resp = requests.get('http://localhost:9091/UserPost/user/viewPosts.do')
    data=resp.json()
    modelPost={"positive":27.0,"negative":0.0,"data":"values88888888","postId":"post2"}
    my={"text":"hapy"}
  
    
    for i in data:
    	modelPost['positive']=i['positive']
    	modelPost['negative']=i['negative']
    	modelPost['data']=i['data']
    	modelPost['postId']=i['postId']
    	my['text']=modelPost['data']
    	r = requests.post('http://text-processing.com/api/sentiment/',my)
    	daa=r.json()
    	modelPost['negative']=float(float(daa['probability']['neg'])+1)
    	modelPost['positive']=float(float(daa['probability']['pos'])+1)
    	r1 = requests.put('http://localhost:9091/UserPost/user/updatePost.do/',json=modelPost)
    	print(modelPost)

    return modelPost



	
if __name__ == '__main__':
    app.run(port = 5000)