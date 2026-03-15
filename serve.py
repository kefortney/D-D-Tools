#!/usr/bin/env python3
"""Local development server for D&D Tools.
Run: python3 serve.py
Then open: http://localhost:8080
"""
import http.server
import socketserver
import os
import webbrowser
import threading

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        print(f"  {self.address_string()} - {format % args}")


def open_browser():
    import time
    time.sleep(0.5)
    webbrowser.open(f"http://localhost:{PORT}/index.html")


if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"D&D Tools running at http://localhost:{PORT}/index.html")
        print("Press Ctrl+C to stop.\n")
        threading.Thread(target=open_browser, daemon=True).start()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
