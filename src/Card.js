import { Button } from "bootstrap";

export default function Card() {
    function buttonHandler() {

    }
    return (
    <div>
        
    <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Hit it!</h5>
        <p class="card-text">Hit the button!</p>
        <button href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#theModal" onClick={buttonHandler}>I'm right here!</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Hit it!</h5>
        <p class="card-text">Hit the button!</p>
        <button href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#theModal">I'm right here!</button>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Hit it!</h5>
        <p class="card-text">Hit the button!</p>
        <button href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#theModal">I'm right here!</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="theModal" role="dialog">
            <div class="modal-dialog modal-sm vertical-align-center">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                  <h4 class="modal-title">The heading...</h4>
                </div>
                <div class="modal-body">
                    You did it!
                </div>
                <div class="modal-footer">
                    <button type="button" data-bs-dismiss="modal" class="btn btn-default">Close</button>
                </div>
              </div>
            </div>
        </div>
</div>
    )
}