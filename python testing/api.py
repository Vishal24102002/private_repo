from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# Database configuration
db_config = {
    'host': 'Piyush2510.mysql.pythonanywhere-services.com',
    'user': 'Piyush2510',
    'password': 'iamtherock',
    'database': 'Piyush2510$default'
}

@app.route('/')
def index():
    # Connect to MySQL
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)

    # Fetch data from the 'users' table
    cursor.execute("SELECT id, first_name, last_name, email, date_of_birth, gender, phone_number FROM volunteers")
    users = cursor.fetchall()

    # Close the connection
    cursor.close()
    conn.close()

    # Render the template and pass data to it
    return render_template('test.html', user=users)

if __name__ == '__main__':
    app.run(debug=True)
