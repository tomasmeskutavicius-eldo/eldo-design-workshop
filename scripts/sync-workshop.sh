#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

REMOTE="${WORKSHOP_REMOTE:-origin}"
BRANCH="${WORKSHOP_BRANCH:-main}"

echo "Fetching ${REMOTE}/${BRANCH}..."
git fetch "$REMOTE"

if git rev-parse "@{u}" >/dev/null 2>&1; then
  BEHIND="$(git rev-list --count "HEAD..${REMOTE}/${BRANCH}" 2>/dev/null || echo 0)"
  if [ "${BEHIND}" -gt 0 ]; then
    echo "Merging ${BEHIND} commit(s) from ${REMOTE}/${BRANCH}..."
    git merge "${REMOTE}/${BRANCH}" --no-edit
  fi
fi

if command -v npm >/dev/null 2>&1 && [ -f package.json ]; then
  echo "Building production assets..."
  npm run build
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Committing all changes..."
  git add -A
  git commit -m "$(cat <<EOF
Sync workshop changes.

Automated sync via scripts/sync-workshop.sh
EOF
)"
fi

echo "Pushing to ${REMOTE}/${BRANCH}..."
git push "$REMOTE" "$BRANCH"

echo "Done. ${REMOTE}/${BRANCH} is up to date."
