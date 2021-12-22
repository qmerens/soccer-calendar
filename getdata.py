#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
import json

url = 'https://secondaire.lachine.sainteanne.ca/wp-admin/admin-ajax.php'
myobj = {'action': 'simcal_fullcal_load_events',
         'calendar_id': '5272',
         'start': '2021-11-21',
         'end': '2031-07-02',
         'timezone': 'America/Toronto'
        }



# In[2]:


headers={    
    "Content-Length": "109",
    "Origin": "https://secondaire.lachine.sainteanne.ca",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.52 Safari/536.5",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Referer": "https://secondaire.lachine.sainteanne.ca/calendrier-soccer/"
        }


# In[3]:


x = requests.post(url, data = myobj,headers=headers)


# In[4]:

print(x.text)
with open('data.json', 'w') as f:
    f.write(x.text)

