RCS: $Id: README,v 1.57 1998/01/18 21:57:44 root Exp $


TkInfo
======


What is it?
-----------

TkInfo is a graphical browser for files in the GNU hypertext "info"
format. It runs on every system that supports Tcl/Tk, which means all
Unix/X, Macintosh, Windows95 and Windows NT systems.

Info files provide a robust hyper-text capability that is ideal for
on-line help.  The format is suitable for both tty-based and graphical
systems.  In addition, the same texinfo source can produce both a nice
hardcopy manual (via TeX) and online browsable info files.  All GNU
programs (e.g. the editor emacs, the compiler gcc, the C library
glibc, and the shell bash, available for free from
ftp://prep.ai.mit.edu/pub/gnu) are documented in this way (via
texinfo). Info files usually reside in the directory /usr/info or
/usr/local/info or /usr/local/gnu/info on Unix systems.


How to get it?
--------------

TkInfo up to version 0.7-beta is available by anonymous ftp from:
        ftp://ptolemy.eecs.berkeley.edu/pub/misc

TkInfo versions 0.8 and later are available from 
        http://math-www.uni-paderborn.de/~axel/tkinfo/

TkInfo is free.


What is required to install and run it?
---------------------------------------

In order to unpack the gzipped tar archive tkinfo-x.y.tar.gz, you need
the programs gzip and tar. These are available for all operating
systems and can be downloaded from your favorite freeware archive.

You need an interpreter (usually called wish) for Tcl7.4 and Tk4.0 or
better on your system. Tcl/Tk is a language to quickly develop
portable graphical user interfaces, among other things. If you're
running the X Window system under Unix, you can check your version of
Tk with the shell command

     echo 'puts $tk_version; exit' | wish

If you get an error or a version smaller than 4.0, check if you have a
program called wish4.0 or wish4.1 or wish8.0 instead. If yes, then you
need to change the first line of the tkinfo script to

#!/usr/local/bin/wish4.0

or whatever the path of the correct wish is. If no, then you need to
install the newest version of Tcl and Tk first. They are available for
free via anonymous ftp from ftp://ftp.smli.com/pub/tcl .

If you have an old version of Tcl/Tk installed on your system and you
can't or don't want to upgrade, you can use tkInfo version 0.7-beta.

In order to use tkInfo, you also need some info files to read, or else
you are restricted to the tkInfo documentation itself. I can recommend
the info files that come with the GNU C library glibc; they provide an
excellent introduction to advanced C programming. TkInfo (and most
other info readers) can deal with gzip and bzip2 compressed info files
transparently, so you can keep everything in your info directory
compressed at all times. 

The "Manual" and "Apropos" functions of tkInfo require tkman to be
installed on your system. It is a browser for Unix man pages. TkInfo
works perfectly fine without TkMan, but you do want this program, it
is by far the best reader for Unix man pages. It's at
    ftp://ftp.cs.berkeley.edu/ucb/people/phelps/tcltk/
and you need to fetch both tkman and rman.  In order for tkinfo to be
able to communicate with TkMan, you have to use a secure X server,
which is easiest accomplished by having the X session managed by xdm.


How to try it out?
------------------

Simply type 

   ./tkinfo

in the tkinfo directory. If the node "(dir)Top" shows up with a
listing of several info files, you're fine. If some error message
appears and the tkInfo docs show up, tkInfo couldn't find a directory
containing an info file called "dir" in its default search path. If
there is such a directory somewhere on your system, you need to tell
tkinfo about it: either specify it in the environment variable
INFOPATH or with the command line option -dir (see below).


How to install it permanently?
------------------------------

On Unix, put the program in a directory that's in your searchpath,
e.g. /usr/local/bin, and put the manpage tkinfo.1 in your man
directory, e.g. /usr/local/man/man1.

For considerably faster startup, you can also change the first line of
the script to

#!/usr/bin/wish

or whatever the full pathname of the correct wish binary is.

TkInfo uses the environment variables INFOPATH (a colon-separated list
of directories to search for info files) and INFOSUFFIX (a
colon-separated list of suffixes to try, one of which should always be
"") to locate info files.  The default for INFOSUFFIX should be fine
and there's no need for you to set that variable. The default search
paths for info files are defined in the procedure tkiInit() in the
variable defInfoPath. If these are not appropriate for you, you can
either set INFOPATH appropriately, pass directories to tkinfo on the
command line with "-dir", or edit the defaults in defInfoPath once and
for all for your site. For faster startup, don't include more
directories than necessary in that variable.

Initially, TkInfo searches for an info file called "dir" in the info
search path. If there is one, tkinfo will display it; on a well
maintained system, this info file contains links to all other
installed info files. If no dir file can be found, you can still read
other info files: simply type 'g' and then enter the info file's name,
either its full pathname or just its filename if it can be found in
the info search path.

If you want, you can attach an icon to the program class TkInfo in
your window manager's startup file. I use xman.xpm which looks
appropriate and exists on most systems.

For information about how to customize the appearance of tkInfo, start
the program, hit "h" and choose the "Customization" entry.


Any specific information for Win95/WinNT users?
-----------------------------------------------

You will probably want to start tkInfo in the following way:
    wish42 \wherever\tkinfo -dir c:\somewhere\info
if all your info files are stored in the directory c:\somewhere\info.
Once inside the program, all paths should be given to tkinfo in the
unix notation with "/" as separator. If you transport info files to
your Windows machine, make sure that the long filenames survive
intact, or else many links won't work. You probably don't have a
middle mouse button; in order to display a node in a new window, you
can use the undocumented "Shift-Click" on the link. The `!' command to
execute a tcl command won't be very useful since the output is sent to
stdout which is discarded by Windows. Also, `M' to start tkman is
useless since tkman doesn't run on Windows. Please let me know if
there are any other issues.


Any specific information for Macintosh users?
---------------------------------------------

Actually, I haven't tested tkInfo on Macs, so I can't offer any
help. Let me know if you try it out.


Version History
---------------

Version 2.3 (19-January-1998): Tear-off menus now work cleaner under
tk8.0. 

Version 2.2 (12-January-1998): Can now deal with bzip2 compressed info
files. Bzip2 compresses better and, if you have enough memory, is
faster than gzip. Fixed bug in handling of multiple info
directories. Fixed bug where dir would show up twice in history list.
We now deal correctly with Windows-style file and directory names that
start with a volume letter.

Version 2.1 (25-November-1997): Tear-off menus don't work properly under
tk4.0 - disabled.

Version 2.0 (18-November-1997): Meta now accesses menubar just like
Alt. Several internal cleanups. Index lookup bugs fixed; index lookups
now match against the current info file's node names as well.
Continue-Search (^s) now beeps and stops when the whole file has been
searched. Can now deal with identically-named info files in different
directories. Tab and Ctrl-Tab now work as intended.  History entries
can be accessed with Alt-h-<number>. Better status line, with more
feedback messages.  All tear-off menus now fully usable.  Insert page
separators during page-wise scrolling (turn off with command line
option +pagesep). Attempt to scroll at end of node results in jumping
to successor node (turn off with command line option +scrollthrough).

Version 1.9 (20-October-1997): History mechanism remembers position in
node and last selected link, like the "last" command. Minor cosmetical
cleanups.

Version 1.8 (24-September-1997): We can now do Index lookups with 'i'.
The prompt area now disappears upon any action, not just ^g.
Various other minor cosmetical changes and bug fixes.

Version 1.7 (18-August-1997): Raise the target window after a
redirect.  Add key bindings of ],[,{,} as in XEmacs. If foo and
foo.info both exist, prefer foo.info since foo is probably a directory
or an executable.  XEmacs info pages often use "()foo" instead of
"foo". We can deal with that now. The "logical successor" command
should never descend into the menu of Index nodes. Fixed another bug
under Tk4.0.

Version 1.6 (15-August-1997): Fixed a bug in the balloonhelp system. 
We now have a manpage. Link highlighting now correct. Sun Keypad keys
now bound. Optional display of current info directory (command line
option -showdir).

Version 1.5 (16-June-1997): Transient menu works now under Tk4.0 as
well. Sun specific keysym bindings removed so that script works on
Win95 again. Help appears in its own window now. Remember position in
node and last selected link for "last" command. Can cycle links with
Tab like lynx. Added Usage tips. All lengthy actions now interruptible
with ^G. Backwards search. Previous inputs in the prompt (search and
goto) window can now be recalled with Crsr Up. Old nodelook command
line option changed to linklook; new command line options searchlook
and highlight.

Version 1.4 (04-Apr-1997): History mechanisms added. More
buttons. "Toggle" command removed; "Top" command added.
Debian-faq.info uses "Previous" instead of "Prev" in the header, and
^L characters. We can now deal with that.  Hitting Space repeatedly
walks through a complete info file in logical order. Backspace walks
backwards. Balloonhelp. Right-click on link sets up a "redirect
window"; successive right-clicks will send their output to that
window. Middle and Right-clicks work as expected also on the
buttons. Right-click brings up little menu. Searching is now done
through the whole info file, not only through the current node.

Version 1.3 (08-Mar-1997): backslashes in links (even at the end) work
now (for latex.info). Correct status message after error. Search
status messages improved.

Version 1.2 (05-Mar-1997): Fixed --help. .Xdefaults customization now
optional. -geometry now handled correctly in all cases.

Version 1.1 (04-Mar-1997): If there's more than one info directory
specified (with INFOPATH or with -dir), a new Directory menu will let
you choose; D command removed. Now works with Windows and Macs. Search
status messages fixed. Initial node name can now contain spaces.  Now
deals correctly with doubles in INFOPATH. Ctrl-2 didn't work
correctly. m and f commands now implemented: allows for completely
mouseless operation. All fonts, colors, etc. are now customizeable
through .Xdefaults. Customization documented in new info node in the
docs.

Version 1.0 (20-Feb-1997): if a node can't be found, try case
insensitive search. Can now do apropos search using tkman. Ctrl-2
opens second menu entry in new window. Keep search status messages
visible. From Frank Leitner: better, customizeable fonts, pointer
changes over links, scrollbar should not vanish upon shrinking the
window, help menu moved to the right.

Version 0.9 (17-Feb-1997): node names are case sensitive! (someone
tell that the author of ipc.info...) Delete key works now.
Crossreferences inside or after menus work. Can now specify an info
file to load on the commandline. No problems with special characters
in node names anymore. Case-insensitive search and Ctrl-s
fixed. Backslash in regexps fixed. Now distributed as a single tcl
script. Scrolling with button-2 and selecting with button-1 now works
as expected even over links. Can deal with Xemacs-style menu
entries of the form "* GNUS::." Accept new command line options -help,
-iconic, and -geometry; -lines removed. Docs improved and source code
roadmap added.

Version 0.8 (6-Feb-1997) now maintained by Axel Boldt. Works with
tcl7.4/tk4.0 or later. Older versions of tcl/tk are no longer
supported. Middle-click on link will bring up the node in new
window. More keybindings and minor improvements to the interface. New
command line option -lines. Docs updated.

Version 0.7-beta (23-Dec-1993) adds many new features including a menu
bar, links to tkman, reorganized files, "gz" compressed file support,
improved searching interface, better docs, and many other minor
improvements.

Version 0.6 (27-Aug-1993) adds a couple new features, and a mod so
that menu items and xrefs trigger on ButtonRelease events rather than
ButtonPress in order to work around a weird interaction with the tk
text widget.  The toplevel widgets use classname "TkInfo".  Also adds
text searching, much more documentation.  Modified to support tcl7.0.

Version 0.5 adds several new features including: several new scrolling
commands, new menuing commands; a "node look" that changes how
highlighting is performed (mainly for B/W screens); a menu of
top-level info "dir"s; much better error messages and popup error
windows; optional display of headers.

Version 0.4 fixes some bugs with auto loading and replaces the unusable
"-file" option with "-infofile".  It provides a work around for Ultrix sh.

Version 0.3 fixes some bugs in with the key bindings and
adds support for compressed info files.


What's left to do?
------------------

TkInfo is still incomplete.  The following is a list of things to do.
Feel free to send in patches.

-  Add option to allow all the "*note:" to not be drawn on the screen,
   or change them to "see also".
-  Implement stat'ing of the source files with auto-reload.
-  Figure out some heuristic for timely un-loading files to save memory.
-  Incremental search through the whole file. Glimpse search through
   the whole info tree.
-  A tree view of the info file should be possible, maybe similar to
   xoobr.
-  Bookmarks and Annotations support like Xemacs. Bookmarks should be 
   organizable in folders and subfolders.
-  In short, implement everything from tkman, the mother of all tk 
   scripts, and XEmacs info mode, the mother of all info browsers.

Who wrote it?
-------------

Kennard White <kennard@ohm.eecs.berkeley.edu>
  (up to version 0.7-beta)
Axel Boldt <boldt@math.ucsb.edu>
  (beginning with version 0.8)

Please report any and all problems you have with this program to
boldt@math.ucsb.edu.
