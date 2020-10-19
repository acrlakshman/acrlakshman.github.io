My project for the course ME964 (_Two-Phase Flows Fundamentals_) taught by [Prof. Mario F. Trujillo] in the Fall of 2012. This was done in collaboration with [Imaduddin Ahmed]. Key features that the source code can handle are listed here

* Cell centered and face centered formulation of solving the modelled momentum equation detailed in [Fedkiw et al.](http://graphics.ucsd.edu/~henrik/papers/smoke/) is implemented in finite volume formulation of OpenFOAM. But this implemented formulation resulted in unknown instability issues.
* Dusty gas and equilibrium approximations are used to advect smoke.
* Implemented in the framework of [OpenFOAM](http://www.openfoam.com/).
* Results can be rendered using [Mitsuba].

Source code: [[12/2012](smoke-simulation/ME964_ProjectCode.zip "file")]; [[Report](smoke-simulation/ME964_ProjectReport.pdf "file")]

##### Some rendered results (using Mitsuba)

| | | |
|-|-|-|
|![Frame-3](smoke-simulation/taup_0_frame3.png)|![Frame-20](smoke-simulation/taup_0_frame20.png)|![Frame-37](smoke-simulation/taup_0_frame37.png)|

If you are interested in knowing how to render multiple images with Mitsuba renderer and make a movie with them, please refer to my [CS838 project](project/crystal-growth).

[Prof. Mario F. Trujillo]: http://www.engr.wisc.edu/me/faculty/trujillo_mario.html
[Imaduddin Ahmed]: https://multiphaseflow.erc.wisc.edu/
[Mitsuba]: http://www.mitsuba-renderer.org/