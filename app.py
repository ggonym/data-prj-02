from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


#@app.route("/about")
#def about():
#    return("about.html")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render가 PORT 환경변수를 줌
    app.run(host="0.0.0.0", port=port)

# if __name__ == "__main__":
#     app.run(debug=True)


# from flask import Flask, render_template
# import pandas as pd

# app = Flask(__name__)

# @app.route("/")
# def index():
#     # CSV 읽기
#     df = pd.read_csv("keywords.csv").head(20)
#     keywords = df.to_dict(orient="records")
#     return render_template("index.html", keywords=keywords)

# if __name__ == "__main__":
#     app.run(debug=True)

