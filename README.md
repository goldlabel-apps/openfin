## OpenFin

This repo exists to provide a quick way to evaluate the [OpenFin](https://www.openfin.co/) financial application platform. It is currently used by top tier financial institutions as the framework on top of which specific applications are built. 

OpenFin provides a solid application framework for desktop OS's. The frontend is Framework agnostic, which means we can use modern React patterns, including Redux, Material UI and much more

> [GitHub starter](https://github.com/built-on-openfin/frontend-framework-starter)

## Difference between containers & workspaces

A container is an individual window or instance of an application running within OpenFin, while a workspace refers to a collection of containers arranged in a specific layout, providing a convenient way to manage and switch between different window configurations

1. **Container:**
   - A container in OpenFin is essentially an instance of an OpenFin application window. It is a self-contained windowed environment where applications run.
   - Containers can hold various web applications or widgets within them, allowing multiple applications to run concurrently within separate windows.
   - They encapsulate the running application, providing its own context, environment, and resources.

2. **Workspace:**
   - A workspace, on the other hand, is a broader concept that encompasses multiple containers or windows arranged in a specific layout or configuration.
   - Workspaces in OpenFin allow you to organize and manage multiple windows or containers together as a single layout or arrangement.
   - They can save the state of different applications, their positions, sizes, and relationships with each other, enabling users to quickly switch between predefined layouts or configurations.
