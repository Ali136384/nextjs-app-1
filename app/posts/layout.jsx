export const metadata = {
  title: "post Page",
};
function layout({ children }) {
  return (
    <>
      {children}
      <div>layout posts</div>
    </>
  );
}

export default layout;
