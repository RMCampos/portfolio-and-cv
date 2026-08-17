# Docker Commands

## Create file

```bash
docker run --user "$(id -u):$(id -g)" \
  -v "$PWD":/work \
  -w /work \
  ghcr.io/rendercv/rendercv:latest new "Ricardo Campos"
```

## Render file

```bash
docker run --user "$(id -u):$(id -g)" \
  -v "$PWD":/work \
  -v /tmp/rendercv-cache:/root/.cache \
  -w /work \
  ghcr.io/rendercv/rendercv:latest render "Ricardo_Campos_CV.yaml"
```

## Fix permissions

```bash
chmod 777 "$PWD"
```

then:

```bash
docker run -v "$PWD":/work -w /work ghcr.io/rendercv/rendercv:latest render "Ricardo_Campos_CV.yaml"
```
