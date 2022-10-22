export default function Profile() {
    return (
        <div class="container mt-5">
            <div class="row d-flex align-items-center">
                <div class="col-3">
                    <div class="text-center mt-3">
                        <h1 class="mt-2 mb-0">Hirotaka Aoki</h1>
                        <h5>Junior Engineer</h5>
                    </div>
                </div>
                <div class="col-9">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td scope="col-2">生まれ:</td>
                                <td scope="col-10">1995 / 11</td>
                            </tr>
                            <tr>
                                <td scope="col-2">出生地:</td>
                                <td scope="col-10">千葉県佐倉市</td>
                            </tr>
                            <tr>
                                <td scope="col-2">趣味:</td>
                                <td scope="col-10">サッカー観戦、旅行、ゲーム、個人開発</td>
                            </tr>
                            <tr>
                                <td scope="col-2">E-mail:</td>
                                <td scope="col-10">aoki.hirotaka.biz [at] gmail.com</td>
                            </tr>
                            <tr>
                                <td scope="col-2">Github:</td>
                                <td scope="col-10"><a href="https://github.com/aoki-h-jp" class="link-info">@aoki-h-jp</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}