

function Board({children}){


    return(
        <div className='board-row'>
            <div className='board-outer'>
                <div className='board-hs'>
                    <h4 className='board-h'>PLAN</h4>
                    <h4 className='board-h'>REALITY</h4>
                    <h4 className='board-h'>REVISED</h4>
                </div>
                <div className='board-main'>
                    <div className='board-time'>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13</span>
                        <span>14</span>
                        <span>15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Board;