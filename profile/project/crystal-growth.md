My project for the course [CS838](http://pages.cs.wisc.edu/~sifakis/courses/cs838-f12/) (_Advanced Modeling and Simulation_) taught by [Prof. Eftychios Sifakis] in the Fall of 2012. Currently, here are some of the implementations in the source code

* 3D implementation of Gradient augmented level set method ([arXiv version](https://arxiv.org/abs/0905.3409)) with tri-cubic Hermite interpolating polynomials.
* Semi-Lagrangian implementation of pde’s for constant and linear extrapolations of scalar field across interface, originally proposed in "_A partial differential equation approach to multidimensional extrapolation_, J. Comput. Phys. 193 (2004) 349-355".
* Implemented in the framework of [PhysBAM].
* Results can be rendered using [Mitsuba].

Source code: [12/2012, @[github](https://github.com/acrlakshman/crystal_growth_level_set_method)]; [Report](crystal-growth/report.pdf "file")

---

##### Some rendered results (using Mitsuba)

| | |
|-|-|
|![crystal growth initial](crystal-growth/crystal_growth_initial.png)|![crystal growth final](crystal_growth_t.png)|

---

[crystal-growth-video](https://youtu.be/KuVfyDwx2qo "show_video")

*[Crystal growth simulation](https://youtu.be/KuVfyDwx2qo) from [Lakshman Anumolu](https://www.youtube.com/channel/UC-kESKbz8Vw4RgoQiEh_LLg) on YouTube*

Scenes are rendered using [Mitsuba] v0.4.5. Scene file along with the scene background can be obtained from [here](crystal-growth/renderscene.zip "file"). Please note the following regarding the files in the downloaded zip file.
* `scene.xml`: scene file that takes obj file as an input argument.
* `movie.sh`: script that renders multiple scenes and converts exr images to png files and finally makes a movie using ffmpeg.
* I believe these files will be helpful for a beginner in understanding how to use Mitsuba in their projects. They are pretty much self-explanatory.

Note: `mtsutil` that comes with mitsuba can also be used instead of some of the above scripts (e.g. to get png files).

[Prof. Eftychios Sifakis]: http://pages.cs.wisc.edu/~sifakis/
[PhysBAM]: http://physbam.stanford.edu/
[Mitsuba]: http://www.mitsuba-renderer.org/