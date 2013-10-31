#!/bin/sh
lessc bootstrap.less > ../css/bootstrap.css && lessc -x bootstrap.less > ../css/bootstrap.min.css 