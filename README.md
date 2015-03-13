# New Wrapper Template

---------------------------------------------------------------
## purpose

this repo is to make the creation of new page wrappers in Lumiante online quick and easy and result in lean code.

---------------------------------------------------------------
## contents

### Luminate blank 

exists as a reference to see what Luminate adds to the page by default.

### Baseline Wrapper 

is a wrapper to use as a starting point for new wrappers for all applications across all clients
it is intended to include all genral front-end best practices as well as Lumiante specific best practices

### Snippets

houses code that may be useful for putting together a wrapper, but does not apply to all situtations

---------------------------------------------------------------
## naming convention for pagebuilder pages is:

reus_wrpr_mitch_baseline_{element}

---------------------------------------------------------------
## body tree

header.top-level
	reus_wrpr_mitch_baseline_header
		reus_wrpr_mitch_baseline_login
		reus_wrpr_mitch_baseline_nav
content.top-level
	[[S63:3]]
footer.top-level
	reus_wrpr_mitch_baseline_footer

---------------------------------------------------------------
## URL of example
http://vateam.convio.net/site/PageNavigator/mitch_baseline_wrapper_example.html

---------------------------------------------------------------
## steps to implement

1. copy files out of repo
2. upload cs and js files to FTP
3. update paths in reus_wrpr_mitch_baseline_head to FTP files
4. update names of reus files to match current project
5. create pagebuilder pages in LO
6. create new wrapper
7. apply new wrapper to test page for testing
