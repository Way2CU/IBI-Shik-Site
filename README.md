<<<<<<< HEAD
# IBI Shik

Landing page for Socio-economic meeting.

## License

The MIT License (MIT)

Copyright (c) 2016. by Way2CU, http://way2cu.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Site design</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://way2cu.com" property="cc:attributionName" rel="cc:attributionURL">Way2CU</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

=======
# Caracal-Template-Site

Default Caracal site with predefined Vagrantfile for easy start. This version of base site structure contains commonly used template for even faster development.

### Preparation

The following steps need to be executed in order to get a new fully functional development environment for Caracal-based site:

* [Create a new empty repository](https://github.com/repositories/new) on GitHub. This is where we will keep site-specific files, so name it according to site. For the sake of tutorial we'll call it `New-Site`;
* Clone new repository to your local machine under `New-Site` name by issuing the following command:
```
git clone git@github.com:You/New-Site.git New-Site
```
* Go in to `New-Site` directory;
* We need to add [Caracal-Template-Site](https://github.com/Way2CU/Caracal-Template-Site) as `upstream` so Git knows where to pull things from. You do that with following command:
```
git remote add upstream https://github.com/Way2CU/Caracal-Template-Site.git
```
* We need to get `upstream` data. To do that issue the following command;
```
git pull upstream master
```
* Our new repository is ready, we can now push changes to GitHub:
```
git push origin --all
```

### Development environment

We use Vagrant to set up our environment. Once preparation is done you will have couple of files in your `New-Site` directory. These files should not be changed. While in `New-Site` directory issue the following command:
```
vagrant up
```
This should download, prepare and configure development environment for `New-Site`. This preparation can take a while depending on your network speed. Once preparation is done, additional files will appear in your directory. You can now start working on your new project.

Suspending virtual environment is done with `vagrant suspend` and resumed with `vagrant resume`. Once development is completed virtual environment can be destroyed with `vagrant destroy` without affecting site files.
>>>>>>> c290ee4740654f6511a49a0a799e10bfb8b4fca4
