<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Portfolio media mappings live in the shared project data and are rendered by the same cards/detail view on both pages, so media stays consistent.
Uploaded video frames may be extracted only for player posters; a missing requested screenshot remains a labeled card placeholder.
Shared branding uses the original uploaded logo asset pointer; only the favicon is a resized, proportion-preserving public raster.
Decorative depth and background motion use CSS and fine-pointer card transforms, with a global reduced-motion override; do not add a 3D library for these effects.
Engineering clips live in shared data and use one controlled-video section on Home and Projects, with poster-first loading and WebM/MP4 alternatives to avoid duplicate mappings and improve browser playback.
