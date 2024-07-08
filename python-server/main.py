from datetime import datetime
from flask import Flask, request, jsonify, send_file, abort
import subprocess
import os
from pathlib import Path

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
        result = subprocess.run(['python3', 'temp_code.py'], capture_output=True, text=True, timeout=1)
        output = result.stdout
        error = result.stderr
    except subprocess.TimeoutExpired:
        return jsonify({'output': '', 'error': 'Execution timed out'}), 400
    finally:
        # 一時ファイルを削除
        os.remove('temp_code.py')

    return jsonify({'output': output, 'error': error})

@app.route('/fetch/wordcloud', methods=['POST'])
def wordCloud():
    data = request.get_json()
    content = data.get('content', '')

    formatted_date = datetime.now().strftime("%Y%m%d%H%M%S")
    filename = formatted_date[0:13] + '.png'

    file_path = Path(filename)
    if not file_path.exists():
        try:
            # Pythonコードを実行
            subprocess.run(['python3', './word_cloud/word_cloud.py', content, filename], capture_output=True, text=True, timeout=10)
        except subprocess.TimeoutExpired:
            return jsonify({'output': '', 'error': 'Execution timed out'}), 400

    file_path = Path(filename)
    if os.path.exists(file_path):
        return send_file(file_path, mimetype='image/png')
    else:
        abort(500, description="phthon excut error")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081)