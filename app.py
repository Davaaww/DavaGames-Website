from flask import Flask, jsonify
from flask_cors import CORS
import pyodbc

app = Flask(__name__)
CORS(app) # Mengizinkan website HTML kita meminta data ke API ini

# Mengatur koneksi ke SQL Server
# GANTI "NAMA_SERVER_KAMU" dengan nama server yang muncul saat kamu login SSMS
conn_string = (
    "Driver={ODBC Driver 17 for SQL Server};"
    "Server=LAPTOP-OUTKSI9O;" # Biasanya localhost atau localhost\SQLEXPRESS
    "Database=db_davagames;"
    "Trusted_Connection=yes;"
)

@app.route('/api/games', methods=['GET'])
def get_games():
    try:
        conn = pyodbc.connect(conn_string)
        cursor = conn.cursor()
        # Mengambil semua data dari SQL
        cursor.execute("SELECT title, console, genre, img FROM tb_games")

        games_list = []
        for row in cursor.fetchall():
            # Mengubah format console dari "ps4,ps5" menjadi array ["ps4", "ps5"]
            console_array = row.console.split(',')

            # Menyusun data ke dalam format yang dimengerti website (JSON)
            game = {
                "title": row.title,
                "console": console_array,
                "genre": row.genre,
                "img": row.img
            }
            games_list.append(game)

        return jsonify(games_list)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)