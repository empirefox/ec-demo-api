export function JsonData(data: any) {
  return (req: any, res: any, next: any) => {
    res.json(data);
    return next();
  }
}

export function timestap(offsetSecond: number) {
  return Math.floor(Date.now() / 1000) + offsetSecond;
}
