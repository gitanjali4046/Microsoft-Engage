# Microsoft-Engage

## Setup

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install all the library from requirements.txt.

```bash
pip install -r requirements.txt
```
or
```bash
pip3 install -r requirements.txt
```

### Run the Server
After that completes you can run the app with:

```bash
python main.py
```
or, open `run.bat`

### Open in the browser

http://127.0.0.1:5000/

#### Gotchas

If you run in to the following error:

```bash
Traceback (most recent call last):
  File "run.py", line 1, in <module>
    from webapp import app
  File "/Users/timothysmith/code/web/Open Source/Mathstep/webapp/app.py", line 1, in <module>
    from flask import Flask, render_template
```
You can fix it with:

```bash
pip uninstall flask && python -m pip install flask
```

```bash
pip uninstall flask && python3 -m pip install flask
```
