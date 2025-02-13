import React from 'react'

export default function Signin() {
  return (
    <>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
    <div>
            <div className="card rounded-4 border-0">
                <div className="card-header  border-0 d-flex" style={{}}>
                    <h5 className="card-title mb-0">Sign-in</h5>
                    <span className="close-icon ms-auto">
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </span>
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <small className="text-muted mb-3 fw-bold text-secondary">
                            For a more personalised experience, sign in with your registered mobile
                            number
                        </small>
                        <span className="input-group-text">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAwFBMVEX/aCAEajj/////Zhz/cjX//Prk7+kAajY2gloHA40AAIoAAIkAAIYAAIAAAIMAAI75+f3v7/egn83o6PSrqtNmZa/OzeaMi8L19fpwb7Xk5PLNzeJaWarV1OkAAHy8u9/GxuNjYbB+fbxzcrXJyOW9vN2nptCIh71PTahIRqOWlclCQKGysdcTEJI2M6B/frs8Op0rKZmLi74kIpVTUqWFg8diYLceHJQ9OqUZFpTc3O5WVK6MisdDQKhoZrmsq9mXlAcaAAAIgklEQVR4nO2ba3ejOBJAs9onSEIIzDMQwDaOsbEddzyThHh3/v+/2pJwZ3uiPf1pR+rTWzdtGkySI9+USkIUd3cIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgnyXPyOfufsL8pm7vyKfuSPIZ34EJ7KPHpPtsE0eo166bgxx7yRMl6+MUeorKGXsdZmGjtvk1onMnhn1hed5whe3/yl7ztxGi0snchlQoTX4QogDvGDPhzdosHRpxaGTSCgjHqXbbOBjXMcjH7KLzzz1pojcNcyZk3jLBISIT3cyJnlKiPqXkzjfQazAGTbErprmykmrOonvF8kxJ61+Zw6MluTHYqVP0t5R2xw5GSFIPDqk+qDXEfGL2sSzn3RLIa2whZvGuXESMR8yaUKktiH1Z/9VbTY6t8aSJJBrfOYmqThxsgjgA7/4GSG/6eNObV7V5l/6GFRkcN4TgRMpLpy00HHoa1zC7qRDpFDh8gKvuFCHiwk2pXyiIKV10D4HTmIBUXKe5oNEdZZMmRHwWkDoEJnMp6YzRIpwMPo4cLJXHzUno57ClwNs7mEjfbAz3MPRoAKIhCPJlby9/QbadxLBpMznIOAXnU87iJGYSlLSkkgKUbHQ2UXCMCQ5DMkO8qx1JzkMObTYwV74rvpFCT7IeSQTm8h4BhFUhUn8rqJoV1AYfKxP8607WcHH3M67+Vut3oCjbk/qoCZ7yCTbFbw3vd1EbEHgynYTbTuJYd7O6nI+KAUMK2Uwkk0g0yCVbEPGAM614vYNcc0cpFnbTjIIk4LIqNZHdQDZpPDzlI/3/H7kaQ4nwcvt7E7CSY9mltto2Ul4gKHkAjtjpT93+5CROOgkq1reVkx2ECa7B32hU3cjbC8wSL1ZXmSy7KSFQYep2RnMQi7KyoKvSBG0+3Mf9Od9GxRk9aBmK1PV6ZTyon7A8sTNspMl9T6u7HpfWcl4VbJhpA18jQMrO35VRj4uihfMoye7jbTsRIhvUmZYPGxrsuJJz1O/9Vo/5X0CcTNdHpKP7hKrH7HbSLtO4gAmpnnb1/l83B54V2c8OhVZ89RkxSni1ynhh1uQhFO/zmHaG9gdeew6gXSiRhHZL4+nXl3xhEvOoj5YD02xL5phHfQbxlcqSOL+8XXVSD1SWU4odp1sYCTez9OxvmP89UsfrpOgSocsoL4fZEPaBdU6bHcDY1Wjv09CnNCN1VbadQKTWMHr24FsV4IHT5s2GzK9MO2x6/DYLp4C7hf9rXeRmguPLq220q6TyvfY71ZZ16CFJeNBaCfisCgoF6v22wkJ9De/s9pKu07g8iVQARCGuZRyWjfjoq/TBkboGXoa27RfjP16kjLPc+UmDD4ukCxh30mcNlFWXI6CBg9cIQYInxk/uQj93gNn4mXoTrsxjf8PnNwSBYRKLst6PaXNIvmIk24zrut1XaoouXUgFSfvVltp10nn/36NKN68Bvwta77mE6/JXiDtRt/OR6KfPJ+oxMHT28EUDdBxkr5P3ndM9R6f7S4dHEL32Ue39Vpyz72fe9zZwN880Z2njI7B4bSYyPjEr+0+8il8RU999vA0knJ8fA7OO60lT3zP8s0v+/PYEwnLza/dQodLvOWijYL03C73y/acBrtW8PlOcT0W79EUktNPPo+VkC+f8vT+a77YMPZYJrxJTsv+2C9PScOTMqMfOUfWaf4Eednukqz162L/P9fF8cCXMan4acFr1oqW1Xxz4hcir3xffnyTqtWx20jLTh6pR6+3v/qOnWAv4cuSdxu/YY2/6Xh54jDI5I9sN3+TvFLri4+WnaRq2Uwvh0x7XYuU8R2pgvp4bILmeKyDikRc3ww87XWKFeoH6u/9yv89tteoz75aowYXS92FFg8jmfhSsqTlbcLkkk+kedCXwfJ6JWoB2/OPltto24magVUwEt8WDAIYfaoDSXl/z+97mLocKhVM8zJBHpX6qtH2nUDbTqQQXtDeMkoqJrUYsIbUkqfBfQ5JZK2WEiZxm9flfeAJYftGoPX7gBn76AzlWX3aCrpSddH3AS8QJAW8iPxadnCEMLF9e8fBPXRVLDCoC5i4Uld5kwhJ+NLr+8X9C+wLlVHDSqWbbqCe7QVq4sLJqOoKYBaWX/Xhtld1BSG8YhKquoJ2Xhi45jDDU3UFjfUWOqg/qeCP75dk/qy1ipgW+kvuw3VQpSbx3Tz0NqSE2Rq1e0msceAkf1ZFObc5R6f6z6PyoyarjYqdsJpP1aqXPef//Zf8kbioZ5tUTeOhVjd5Ur06qwu41B3TuWyrh1Enr+s3VRs5fe8X/UE4qXvsGUgRwfJW9xhqE/9Um/n+34KQZSBU3aOTsmE39bE9VXXlVRjP5bCqgGAuAx3nglkZVr6KEjeV1I7qqHVpOX0eSQhW5geZ9DAkwYIMSfNCVXG5i0JQ4q7efnpRSYVu9wdJ1vqduXx4TaQ3bHWZ9ZuLXKJw9lxGWDD9FIK/nGJSQgaBgWgRk3ha+voJBFY4e9zL4fM7/ZHp53eCt+LMN1M6bfi5eGHqvoZgZ1cPZRC3z3mFG8F8/aAXzM2oT6negw0TG5fPBDp+RnLc+lqLvrmjt3A8jG4b5fq5UTJFicfUk6NUPTXKDknkKrV+4NwJkMd9tPvy+GUX9bHr52gVP4KTH427vyGfufs78pm7PyGfQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm6MQEnZigExN0YoJOTNCJCToxQScm+Gy+yd0/kM/8G4S4hADatSwBAAAAAElFTkSuQmCC"
                                style={{ width: 30 }}
                                alt="Dubai flag"
                                className="me-2"
                            />{" "}
                            +91
                        </span>
                        <input type="text" className="form-control" placeholder="Mobile Number" />
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#govind" className="btn btn-primary w-100 mb-3">Sign in with OTP</button>
                    <div className="or-divider text-center">
                        <span className='p-2 mb-3'>or</span>
                    </div>
                    <button className="btn btn-success w-100 mb-3">
                        <i className="fab fa-whatsapp me-2" /> Sign in with WhatsApp
                    </button>
                    <button className="btn btn-light w-100">
                        <img
                            src="data:image/png;base64,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"
                            style={{ width: 30 }}
                            alt="Google logo"
                            className="me-2"
                        />
                        Sign in as kuldeepkumar
                    </button>
                </div>
            </div>
        </div>
        <div className="modal fade" id="govind" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "400px" }}>
            <div className="modal-content">
                <Test/>
            </div>
          </div>
        </div>
    </>
  )
}
