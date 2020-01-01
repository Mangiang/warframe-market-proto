from templates import app

if __name__ == 'main':
    app.run(host="https://warframe-market-proto.herokuapp.com", port=80, processes=3, debug=True)
