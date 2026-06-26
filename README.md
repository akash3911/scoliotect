frontend:
```sh
git clone https://github.com/akash3911/scoliosis.git
cd src/frontend
pnpm install
pnpm dev


#for build, comment/remove output: "export" in next config
pnpm build
pnpm start
```

backend:
```sh
To set up the backend using `uv`:

```bash
cd src/backend
curl -LsSf https://astral.sh/uv/install.sh | sh # if uv is not installed
uv sync
uv run uvicorn main:app --reload
```

