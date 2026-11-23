Project = await req.json();

    const parsedProject = parseProject(project);
    if (!parsedProject) {
      return respErr("invalid project");
    }

    const savedProject = await saveProject(parsedProject);
    if (!savedProject) {
      return respErr("save project failed");
    }

    return respData(savedProject);
  } catch (e) {
    console.log("submit project failed", e);
    return respErr("submit project failed");
  }
}