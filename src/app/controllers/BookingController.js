import Booking from '../models/Booking';

class BookingController {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date,
    });

    //retornar todo relacionamento em vez de voltar so ID
    await booking
      .populate('spot')
      .populate('user')
      .execPopulate();

    return res.json(booking);
  }
}

export default new BookingController();
