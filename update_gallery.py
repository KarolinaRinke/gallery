import os
import json
from glob import glob
import shutil
data = []
for f in glob("./zip/*", recursive = False):
    os.remove(f)
folders = glob("./data/*", recursive = False)
folders.sort(key=os.path.getmtime, reverse=True)
i = 0
for folder in folders:
    data.append({"name": os.path.basename(folder), "imgs": []})  
    for file in glob(folder+"/*"):
        data[i]["imgs"].append(os.path.basename(file))
    shutil.make_archive("./zip/"+os.path.basename(folder), 'zip', folder)
    i+=1
out = "imgData =" + json.dumps(data, indent=4)
with open("script/dataloader.js", "w") as f:
    f.write(out)
print("Done")