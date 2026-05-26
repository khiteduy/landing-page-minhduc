import json
import re

file_path = 'scripts/allorigins-fb.json'

try:
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
        
    contents = data.get('contents', '')
    
    # Normalize escaped slashes
    norm_contents = contents.replace('\\/', '/')
    
    # Find all urls
    urls = re.findall(r'https?://[^\s"\'\\<>]+', norm_contents)
    
    # Find urls containing scontent or fbsbx
    scontent_urls = [u for u in urls if 'scontent' in u or 'fbsbx' in u or 'safe_image' in u]
    print(f"Found {len(scontent_urls)} scontent/fbsbx URLs:")
    for u in sorted(list(set(scontent_urls))):
        print("  -", u)
        
except Exception as e:
    print("Error:", e)
