import {encrypt, decrypt, get_vi, hash} from "./cipher";


class Chain {
  constructor(data, buffer, key, block_size) {
    this.data = data
    this.key = key
    this._buffer = ""
    this.buffer = buffer
    this.block_size = block_size
  }

  add(message) {
    this.buffer += message
  }

  get buffer() {
    return this._buffer
  }

  set buffer(data) {
    if (data.length >= this.block_size) {
      this.submit(data.slice(0, this.block_size))
      this._buffer = data.slice(this.block_size, this.data.length)
    } else {
      this._buffer = data
    }
  }

  submit (chunk) {
    let timestamp = new Date().getTime()
    vi = get_vi()
    let head = timestamp + ":" + hash(this.getLastBlock()) + ":;"
    let encrypted = encrypt(head + chunk)
  }

  getLastBlock() {

  }
}
