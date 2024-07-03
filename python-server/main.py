from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/execute', methods=['POST'])
def execute():
    data = request.get_json()
    code = data.get('code', '')

    # 一時ファイルにコードを書き込む
    with open('temp_code.py', 'w') as f:
        f.write(code)

    try:
        # Pythonコードを実行
        result = subprocess.run(['python3', 'temp_code.py'], capture_output=True, text=True, timeout=10)
        output = result.stdout
        error = result.stderr
    except subprocess.TimeoutExpired:
        return jsonify({'output': '', 'error': 'Execution timed out'}), 400
    finally:
        # 一時ファイルを削除
        os.remove('temp_code.py')

    return jsonify({'output': output, 'error': error})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)