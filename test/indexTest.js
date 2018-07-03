

describe("index.html", () => {
  it("exists", () => {
    expect(document.querySelector('body').innerHTML).to.include('hello')
  })
})

describe("index.js", () => {
  it("exists", () => {
    expect(testVar).to.exist
    expect(testVar).to.deep.equal({}) //without .deep, {} does not equal {}
    expect(testFunc).to.exist
    expect(testFunc()).to.equal('hi')
  })
})
