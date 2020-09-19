# Run this Makefile to convert the SVG's to PNG's which can be uploaded to the
# VGSA website. Requires inkscape.
all: simple-favicon.png vgsa-logo-favicon.png

%.png: %.svg
	inkscape --export-filename=$@ $<
