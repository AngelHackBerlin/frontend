function geometryToPoints(data: any) {
  return data.geometry.replace(/[A-Z()]*/g, "").split(",").map((pair: string) => {
    const [lng, lat] = pair.split(" ").map((v: string) => parseFloat(v));
    return { lat, lng };
  });
}

export default geometryToPoints;
