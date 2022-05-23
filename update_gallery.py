import os
import json
from glob import glob
data = []
folders = glob("./data/*", recursive = False)
folders.sort(key=os.path.getmtime, reverse=True)
i = 0
for folder in folders:
    data.append({"name": os.path.basename(folder), "imgs": []})  
    for file in glob(folder+"/*"):
        data[i]["imgs"].append(os.path.basename(file))
    i+=1
out = "imgData =" + json.dumps(data, indent=4)
with open("script/dataloader.js", "w") as f:
    f.write(out)
print("Done")