export const APPLICATIONS_OPEN = true;

/**
 * NOTE FOR THE TEAM — this link needs attention.
 *
 * This was previously the Google Forms `/edit` URL (the owner-only form
 * builder). It is now the public `/viewform` URL, which is correct.
 *
 * However: the form itself currently returns a Google sign-in wall to signed-out
 * visitors. That is a setting on the form, not something this repo can fix. If
 * that is deliberate (e.g. restricted to @mcmaster.ca accounts), leave it. If it
 * is not, open the form's Settings → Responses and turn off
 * "Restrict to users in <domain>" / "Collect email addresses".
 */
export const APPLICATION_FORM_LINK =
  "https://docs.google.com/forms/d/1amRGHgcl6Jht-zRnIJkxi1lQm3fQzezfl_WmuJ2tuIc/viewform";
